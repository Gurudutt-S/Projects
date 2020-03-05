package com.cts.project.stockPriceservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockPriceServiceImpl implements StockPriceService {

	@Autowired
	StockPriceRepo stockPriceRepo;

	@Override
	public List<StockPrice> getAllStockPrices() {
		return stockPriceRepo.findAll();
	}

	@Override
	public StockPrice getStockPriceById(int id) {
		Optional<StockPrice> stockPriceList = stockPriceRepo.findById(id);
		StockPrice price = stockPriceList.get();
		return price;
	}

	@Override
	public StockPrice saveStockPrice(StockPrice stockPrice) {
		StockPrice price = stockPriceRepo.save(stockPrice);
		return price;
	}

	@Override
	public void deleteStockPrice(int id) {
		stockPriceRepo.deleteById(id);
	}

	@Override
	public StockPrice updateStockPrice(StockPrice stockPrice) {
		StockPrice price = stockPriceRepo.save(stockPrice);
		return price;
	}
	
	

}
