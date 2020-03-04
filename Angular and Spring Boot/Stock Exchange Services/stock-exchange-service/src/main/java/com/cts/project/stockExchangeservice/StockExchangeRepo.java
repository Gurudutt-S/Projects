package com.cts.project.stockExchangeservice;

import org.springframework.data.jpa.repository.JpaRepository;


public interface StockExchangeRepo extends JpaRepository<StockExchange, Integer> {

}
