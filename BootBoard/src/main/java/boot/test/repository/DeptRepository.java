package boot.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import boot.test.domain.Dept;

public interface DeptRepository extends JpaRepository<Dept,Integer> {

}
