package com.cts.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.bean.StockExchange;

public interface StockExchangeDAO extends JpaRepository<StockExchange, Integer> {

}
