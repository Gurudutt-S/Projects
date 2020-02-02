package com.cts.project.dao;

import java.util.List;

import com.cts.project.bean.StockPrice;

public interface StockPriceDAO {

	public boolean saveStockPrice(StockPrice Stock);

	public boolean updateStockPrice(StockPrice Stock);

	public boolean deleteStockPrice(StockPrice Stock);

	public StockPrice getStockPriceByCode(int comanyCode);

	public List<StockPrice> getAllStockPrice();

}
