package com.xxvi.sample;

import com.xxvi.sample.entities.Role;
import com.xxvi.sample.entities.User;
import com.xxvi.sample.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class SampleApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(SampleApplication.class, args);
	}

	public void run(String... args){
		User adminAccount = userRepository.findByRole(Role.ADMIN);
		if(null == adminAccount){

			var user = User.builder()
					.email("admin@gmail.com")
					.firstName("admin")
					.lastName("admin")
					.role(Role.ADMIN)
					.password(new BCryptPasswordEncoder().encode("admin"))
					.build();
			 userRepository.save(user);
		}
	}

}

