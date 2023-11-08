package dev.wladyka.rodrigo.qikserve.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.wladyka.rodrigo.qikserve.model.Order;
import dev.wladyka.rodrigo.qikserve.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/init")
    public ResponseEntity<Order> getOrder(@CookieValue(name = "orderId", required = false) String orderId) {
        Order order = orderService.getOrCreateOrder(orderId);
        ResponseCookie cookie = ResponseCookie.from("orderId", order.getId())
            .path("/")
            .maxAge(3600)
            .build();
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString()).body(order);
    }

    @GetMapping("/finish")
    public ResponseEntity<String> finishOrder(@CookieValue(name = "orderId") String orderId) {
        orderService.finishOrder(orderId);
        ResponseCookie deleteCookie = ResponseCookie
        .from("orderId", null)
        .maxAge(0)
        .build();

        return ResponseEntity
            .ok()
            .header(HttpHeaders.SET_COOKIE, deleteCookie.toString())
            .build();
    }
}
