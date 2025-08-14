package turf_api.controller;

import org.springframework.stereotype.Controller;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import turf_api.entity.Turf;
import turf_api.exception.TurfNotFoundException;
import turf_api.service.TurfService;

@CrossOrigin
@RestController
public class TurfController {

	@Autowired
	private TurfService turfServiceRef;
	@GetMapping("/turfs")
	public Collection<Turf> getAllTurfs(){
		return turfServiceRef.getAllTurfs();
	}
	
	@GetMapping("/turfs/{location}")
    public List<Turf> getTurfsByLocation(@PathVariable String location) {
        return turfServiceRef.getAllTurfLoc(location);
    }
	
	@PostMapping("/turfs")
    public String createTurf(@RequestBody Turf newTurf) {
        turfServiceRef.createTurf(newTurf);
        return "Turf created successfully!";
    }
   
    
    @DeleteMapping("/turfs/{id}")
    public String deleteTurf(@PathVariable Integer id) {
        turfServiceRef.deleteTurf(id);
        return "Turf deleted successfully!";
    }
}
