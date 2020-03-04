package com.cts.project.stockExchangeservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class StockExchangeRestController {

	@Autowired
	StockExchangeService exchangeService;

	@GetMapping("/stockExchange")
	public List<StockExchange> getAllStockExchange() {
		return exchangeService.getAllStockExchanges();
	}

	@GetMapping("/stockExchange/{id}")
	public StockExchange getStockExchangeById(@PathVariable int id) {
		StockExchange exchange = exchangeService.getStockExchangeById(id);
		return exchange;
	}

	@PostMapping("/stockExchange")
	public StockExchange saveStockExchange(@RequestBody StockExchange exchange) {
		StockExchange stockExchange = exchangeService.saveStockExchange(exchange);
		return stockExchange;
	}

	@DeleteMapping("/stockExchange/{id}")
	public void deleteStockExchange(@PathVariable int id) {
		exchangeService.deleteStockExchange(id);
	}

	@PutMapping("/stockExchange")
	public StockExchange updateStockExchange(@RequestBody StockExchange exchange) {
		StockExchange stockExchange = exchangeService.updateStoxExchange(exchange);
		return stockExchange;
	}

}
