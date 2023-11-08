package dev.wladyka.rodrigo.qikserve.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpHeaders;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import dev.wladyka.rodrigo.qikserve.model.Order;
import dev.wladyka.rodrigo.qikserve.service.OrderService;
import jakarta.servlet.http.Cookie;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class OrderControllerTest {

    @Mock
    private OrderService orderService;

    @InjectMocks
    private OrderController orderController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(orderController).build();
    }

    @Test
    void testGetOrder_NoOrderIdCookie() throws Exception {
        when(orderService.getOrCreateOrder(null)).thenReturn(new Order("123", false));

        mockMvc.perform(get("/order/init"))
                .andExpect(status().isOk())
                .andExpect(header().exists(HttpHeaders.SET_COOKIE))
                .andExpect(cookie().exists("orderId"));
    }

    @Test
    void testGetOrder_WithOrderIdCookie() throws Exception {
        String orderId = "c01adb95-049c-4493-a466-723039a2db85";
        when(orderService.getOrCreateOrder(orderId)).thenReturn(new Order(orderId, false));

        mockMvc.perform(get("/order/init").cookie(new Cookie("orderId", orderId)))
                .andExpect(status().isOk())
                .andExpect(header().exists(HttpHeaders.SET_COOKIE))
                .andExpect(cookie().exists("orderId"));
    }

    @Test
    void testFinishOrder_ValidOrderIdCookie() throws Exception {
        mockMvc.perform(get("/order/finish").cookie(new Cookie("orderId", "")))
                .andExpect(status().isOk())
                .andExpect(header().exists(HttpHeaders.SET_COOKIE))
                .andExpect(cookie().exists("orderId"))
                .andExpect(cookie().maxAge("orderId", 0));
    }
}
