package com.cts.project.service;

import java.util.List;

import com.cts.project.dto.UserDTO;

public interface UserService {

	public List<UserDTO> getAllUsers();

	public UserDTO getUserById(int id);

	public UserDTO saveUser(UserDTO user);

	public void deleteUser(int id);

	public UserDTO updateUser(UserDTO user);

	public boolean activateUser(String email);

}
