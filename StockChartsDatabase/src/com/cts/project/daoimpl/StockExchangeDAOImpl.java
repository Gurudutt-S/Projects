package com.cts.project.daoimpl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.cts.project.bean.StockExchange;
import com.cts.project.dao.StockExchangeDAO;
import com.cts.project.hibernate.HibernateUtil;

public class StockExchangeDAOImpl implements StockExchangeDAO {

	SessionFactory SessionFactory = HibernateUtil.getSessionFactory();

	@Override
	public boolean saveStockExchange(StockExchange Exchange) {
		try {
			Session session = SessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.save(Exchange);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean updateStockExchange(StockExchange Exchange) {
		try {
			Session session = SessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.update(Exchange);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteStockExchange(StockExchange Exchange) {
		try {
			Session session = SessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.delete(Exchange);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public StockExchange getStockExchangeById(int id) {
		try {
			Session session = SessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			StockExchange stockexchanges = session.get(StockExchange.class, id);
			transaction.commit();
			session.close();
			return stockexchanges;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<StockExchange> getStockExchange() {
		try {
			Session session = SessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			List<StockExchange> exchange = session.createQuery("FROM StockExchange").list();
			transaction.commit();
			session.close();
			return exchange;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}

}
