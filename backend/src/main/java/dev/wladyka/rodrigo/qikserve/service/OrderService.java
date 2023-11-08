package dev.wladyka.rodrigo.qikserve.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import dev.wladyka.rodrigo.qikserve.model.Order;
import dev.wladyka.rodrigo.qikserve.repository.OrderRepository;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository){
        this.orderRepository = orderRepository;
    }

    public Order getOrCreateOrder(String orderId) {
        if (orderId != null) {
            Optional<Order> order = orderRepository.findById(orderId);
            if(order.isPresent()) return order.get();
        }

        Order newOrder = new Order();
        orderRepository.save(newOrder);
        return newOrder;
    }

    public void finishOrder(String cartId) {
        Optional<Order> order = orderRepository.findById(cartId);
        if(order.isPresent()) {
            var finishedOrder = order.get();
            finishedOrder.setFinished(true);
            orderRepository.save(finishedOrder);
        }
    }
    
}
