package com.cts.project.stockPriceservice;

import java.util.List;

public interface StockPriceService {

	public List<StockPrice> getAllStockPrices();

	public StockPrice getStockPriceById(int id);

	public StockPrice saveStockPrice(StockPrice stockPrice);

	public void deleteStockPrice(int id);

	public StockPrice updateStockPrice(StockPrice stockPrice);

}
