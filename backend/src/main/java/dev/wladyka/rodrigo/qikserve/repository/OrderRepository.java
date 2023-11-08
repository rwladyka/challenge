package dev.wladyka.rodrigo.qikserve.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.wladyka.rodrigo.qikserve.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, String> {
    
}
