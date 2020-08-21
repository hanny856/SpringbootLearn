package boot.test.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import boot.test.domain.Dept;
import boot.test.repository.DeptRepository;

@RestController
public class HelloWorldCtr {
	
	@Autowired
	private DeptRepository deptDao;
	
	@RequestMapping("/")
	public String hello() {
		return "hello World";
	}
	
	@RequestMapping("/add")
	public Dept addList(Dept dept){
		Dept insertDept = deptDao.save(dept);
		return insertDept;
	}
	@RequestMapping("/list")
	public List<Dept> list(){
		List<Dept> deptList = deptDao.findAll();
		return deptList;
	}
	@RequestMapping("/del")
	public List<Dept> delList(int deptno) {
		deptDao.deleteById(deptno);
		List<Dept> deptList = deptDao.findAll(); 
		return deptList;
	}

}
