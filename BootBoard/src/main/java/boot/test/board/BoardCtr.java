package boot.test.board;

import java.util.HashMap;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import boot.test.domain.Dept;
import boot.test.repository.DeptRepository;

@RestController
public class BoardCtr {
	@Autowired
	private DeptRepository deptDao;
	@RequestMapping("/board")
	public String hello() {
		return "hello World";
	}
	
	@RequestMapping("/board/add")
	public List<Dept> addList(Dept dept){
		deptDao.save(dept);
		List<Dept> deptList = deptDao.findAll(); 
		return deptList;
	}
	@GetMapping("/board/list")
	public HashMap<String, List<Dept>> list(){
		HashMap<String, List<Dept>> result = new HashMap<String, List<Dept>>();
		List<Dept> deptList = deptDao.findAll();
		result.put("message", deptList);
		return result;
	}
	@RequestMapping("/board/del")
	public List<Dept> delList(int deptno) {
		deptDao.deleteById(deptno);
		List<Dept> deptList = deptDao.findAll(); 
		return deptList;
	}

}
