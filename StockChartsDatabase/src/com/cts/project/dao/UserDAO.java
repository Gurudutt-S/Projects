package com.cts.project.dao;

import java.util.List;

import com.cts.project.bean.User;

public interface UserDAO {

	public boolean saveUser(User user);

	public boolean updateser(User user);

	public boolean deleteUser(User user);

	public User getUserById(int id);

	public List<User> getAllUsers();

}
