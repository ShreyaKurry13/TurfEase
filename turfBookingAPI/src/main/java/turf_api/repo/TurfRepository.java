package turf_api.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import turf_api.entity.Turf;

public interface TurfRepository extends JpaRepository<Turf, Integer>  {

	List<Turf> findByLocation(String location);
	
}