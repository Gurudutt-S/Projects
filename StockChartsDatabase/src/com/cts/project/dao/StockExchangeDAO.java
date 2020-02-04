package com.cts.project.dao;

import java.util.List;

import com.cts.project.bean.StockExchange;

public interface StockExchangeDAO {

	public boolean saveStockExchange(StockExchange Exchange);

	public boolean updateStockExchange(StockExchange Exchange);

	public boolean deleteStockExchange(StockExchange Exchange);

	public StockExchange getStockExchangeById(int id);

	public List<StockExchange> getStockExchange();

}
