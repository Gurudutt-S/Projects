package com.cts.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.bean.StockExchange;

public interface StockExchangeRepo extends JpaRepository<StockExchange, Integer> {

}
