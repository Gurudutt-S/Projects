package com.cts.project.restController;

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
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.bean.StockExchange;
import com.cts.project.repo.StockExchangeRepo;

@CrossOrigin(origins = "*")
@RestController
public class StockExchangeRestController {

	@Autowired
	StockExchangeRepo exchangeRepo;

	@GetMapping("/stockExchange")
	public List<StockExchange> getAllStockExchange() {
		return exchangeRepo.findAll();
	}

	@GetMapping("/stockExchange/{id}")
	public StockExchange getStockExchangeById(@PathVariable int id) {
		Optional<StockExchange> exchangeList = exchangeRepo.findById(id);
		StockExchange exchange = exchangeList.get();
		return exchange;
	}

	@PostMapping("/stockExchange")
	public StockExchange saveStockExchange(@RequestBody StockExchange exchange) {
		StockExchange stockExchange = exchangeRepo.save(exchange);
		return stockExchange;
	}

	@DeleteMapping("/stockExchange/{id}")
	public void deleteStockExchange(@PathVariable int id) {
		exchangeRepo.deleteById(id);
	}

	@PutMapping("/stockExchange")
	public StockExchange updateStockExchange(@RequestBody StockExchange exchange) {
		StockExchange stockExchange = exchangeRepo.save(exchange);
		return stockExchange;
	}

}
