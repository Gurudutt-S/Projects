package com.cts.project.stockPriceservice;

import org.springframework.data.jpa.repository.JpaRepository;


public interface StockPriceRepo extends JpaRepository<StockPrice, Integer> {

}
