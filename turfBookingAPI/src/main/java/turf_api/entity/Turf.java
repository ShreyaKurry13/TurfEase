package turf_api.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name = "Turf_Details")
public class Turf {
	
	@Id
	@Column(name = "turf_id")
	private int Id;
	
	@Column(name = "turf_name", length = 100)
	private String Name;
	
	@Column(name = "turf_address", length = 200)
	private String Address;
	
	@Column(name = "turf_loc", length = 30)
	private String location;
	
	@Column(name = "turf_price")
	private double Price;
	
	@Column(name = "turf_img")
	private String image;
	

	public Turf() {
		
	}

	public Turf(int id, String name, String address, String loc, int price, String img) {
		super();
		Id = id;
		Name = name;
		Address = address;
		location = loc;
		Price = price;
		image = img;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public double getPrice() {
		return Price;
	}

	public void setPrice(double price) {
		Price = price;
	}
	
	

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Turf [Id=" + Id + ", Name=" + Name + ", Address=" + Address + ", location=" + location + ", Price="
				+ Price + ", image=" + image + "]";
	}

	
}
