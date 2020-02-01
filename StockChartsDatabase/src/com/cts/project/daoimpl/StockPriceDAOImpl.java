package com.cts.project.daoimpl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.cts.project.bean.StockPrice;
import com.cts.project.dao.StockPriceDAO;
import com.cts.project.hibernate.HibernateUtil;

public class StockPriceDAOImpl implements StockPriceDAO {

	SessionFactory SessionFactory = HibernateUtil.getSessionFactory();

	@Override
	public boolean saveStockPrice(StockPrice Stock) {
		try {
			Session session = SessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.save(Stock);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean updateStockPrice(StockPrice Stock) {
		try {
			Session session = SessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.update(Stock);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteStockPrice(StockPrice Stock) {
		try {
			Session session = SessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.delete(Stock);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public StockPrice getStockPriceByCode(int comanyCode) {
		try {
			Session session = SessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			StockPrice stockPrices = session.get(StockPrice.class, comanyCode);
			transaction.commit();
			session.close();
			return stockPrices;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<StockPrice> getAllStockPrice() {
		try {
			Session session = SessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			List<StockPrice> prices = session.createQuery("FROM StockPrice").list();
			transaction.commit();
			session.close();
			return prices;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}

}
