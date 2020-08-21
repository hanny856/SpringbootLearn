package boot.test.board;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("boot.test")
@EntityScan("boot.test.domain")
@EnableJpaRepositories("boot.test.repository")
public class BootBoardApplication {

	public static void main(String[] args) {
		SpringApplication.run(BootBoardApplication.class, args);
	}

}
