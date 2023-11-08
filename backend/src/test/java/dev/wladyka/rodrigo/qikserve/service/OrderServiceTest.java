package dev.wladyka.rodrigo.qikserve.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import dev.wladyka.rodrigo.qikserve.model.Order;
import dev.wladyka.rodrigo.qikserve.repository.OrderRepository;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    @InjectMocks
    private OrderService orderService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetOrCreateOrder_OrderExists() {
        String orderId = "c01adb95-049c-4493-a466-723039a2db85";
        Order existingOrder = new Order();
        existingOrder.setId(orderId);
        when(orderRepository.findById(orderId)).thenReturn(Optional.of(existingOrder));

        Order result = orderService.getOrCreateOrder(orderId);

        assertEquals(existingOrder, result);
        verify(orderRepository, never()).save(any());
    }

    @Test
    void testGetOrCreateOrder_OrderNotExists() {
        String orderId = null;
        when(orderRepository.findById(orderId)).thenReturn(Optional.empty());

        Order result = orderService.getOrCreateOrder(orderId);

        assertNotNull(result);
        verify(orderRepository, times(1)).save(any());
    }

    @Test
    void testFinishOrder_OrderExists() {
        String orderId = "c01adb95-049c-4493-a466-723039a2db85";
        Order existingOrder = new Order();
        existingOrder.setId(orderId);
        when(orderRepository.findById(orderId)).thenReturn(Optional.of(existingOrder));

        orderService.finishOrder(orderId);

        assertTrue(existingOrder.isFinished());
        verify(orderRepository, times(1)).save(existingOrder);
    }
}
