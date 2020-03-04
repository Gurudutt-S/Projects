package com.cts.project.stockExchangeservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockExchangeServiceImpl implements StockExchangeService {

	@Autowired
	StockExchangeRepo exchangeRepo;

	@Override
	public List<StockExchange> getAllStockExchanges() {
		return exchangeRepo.findAll();
	}

	@Override
	public StockExchange getStockExchangeById(int id) {
		Optional<StockExchange> exchangeList = exchangeRepo.findById(id);
		StockExchange exchange = exchangeList.get();
		return exchange;
	}

	@Override
	public StockExchange saveStockExchange(StockExchange stockExchange) {
		StockExchange exchange = exchangeRepo.save(stockExchange);
		return exchange;
	}

	@Override
	public void deleteStockExchange(int id) {
		exchangeRepo.deleteById(id);
	}

	@Override
	public StockExchange updateStoxExchange(StockExchange stockExchange) {
		StockExchange exchange = exchangeRepo.save(stockExchange);
		return exchange;
	}

}
