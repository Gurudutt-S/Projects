package com.cts.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.bean.StockPrice;

public interface StockPriceRepo extends JpaRepository<StockPrice, Integer> {

}
