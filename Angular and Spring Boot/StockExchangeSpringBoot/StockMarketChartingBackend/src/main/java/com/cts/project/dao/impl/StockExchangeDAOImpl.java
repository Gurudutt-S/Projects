package com.cts.project.dao.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.bean.StockExchange;
import com.cts.project.dao.StockExchangeDAO;

@CrossOrigin(origins = "*")
@RestController
public class StockExchangeDAOImpl {

	@Autowired
	StockExchangeDAO exchangeDAO;

	@GetMapping("/stockExchange")
	public List<StockExchange> getAllStockExchange() {
		return exchangeDAO.findAll();
	}

	@GetMapping("/stockExchange/{id}")
	public StockExchange getStockExchangeById(@PathVariable int id) {
		Optional<StockExchange> exchangeList = exchangeDAO.findById(id);
		StockExchange exchange = exchangeList.get();
		return exchange;
	}

	@PostMapping("/stockExchange")
	public StockExchange saveStockExchange(@RequestBody StockExchange exchange) {
		StockExchange stockExchange = exchangeDAO.save(exchange);
		return stockExchange;
	}

	@DeleteMapping("/stockExchange/{id}")
	public void deleteStockExchange(@PathVariable int id) {
		exchangeDAO.deleteById(id);
	}

	@PutMapping("/stockExchange")
	public StockExchange updateStockExchange(@RequestBody StockExchange exchange) {
		StockExchange stockExchange = exchangeDAO.save(exchange);
		return stockExchange;
	}

}
