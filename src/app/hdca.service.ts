import { CustomerData } from "./hdca-licence/applied-licence/applied-licence.component";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HdcaService {
  constructor(private http: HttpClient) {}

  getPendingLicenses() {
    return this.tempData;
  }

  tempData: CustomerData[] = [
    {
      additional_unit_count: 0,
      country: "India",
      purpose: "Commercial use",
      license_type: "Commercial",
      requester_email: "sagar.todkar@cumulus-systems.com",
      license_start_date: "2019-12-10",
      package_type: "HPA Foundation",
      license_key: [
        {
          storage_system_model: "VSP G200",
          license_key_id: 1,
          license_id: 4,
          vendor: "vendor",
          serial_number: "412358",
          capacity: "30"
        },
        {
          storage_system_model: "VSP F700",
          license_key_id: 2,
          license_id: 4,
          vendor: "vendor",
          serial_number: "97306",
          capacity: "100"
        },
        {
          storage_system_model: "VSP F700",
          license_key_id: 3,
          license_id: 4,
          vendor: "vendor",
          serial_number: "97306",
          capacity: "100"
        }
      ],
      license_end_date: "2038-12-10",
      setup_type: "New",
      license_id: 4,
      combined_unit_count: 0,
      customer_name: "Cumulus",
      customer_id: 5,
      department: "Sales",
      order_id: 123456978,
      requester_name: "Sagar Todkar",
      status: "PENDING"
    },
    {
      additional_unit_count: 0,
      country: "India",
      purpose: "Commercial use",
      license_type: "Commercial",
      requester_email: "sagar.todkar@cumulus-systems.com",
      license_start_date: "2019-12-10",
      package_type: "HPA Foundation",
      license_key: [
        {
          storage_system_model: "VSP G200",
          license_key_id: 5,
          license_id: 7,
          vendor: "vendor",
          serial_number: "412358",
          capacity: "30"
        },
        {
          storage_system_model: "VSP F700",
          license_key_id: 6,
          license_id: 7,
          vendor: "vendor",
          serial_number: "97306",
          capacity: "100"
        },
        {
          storage_system_model: "VSP F700",
          license_key_id: 7,
          license_id: 7,
          vendor: "vendor",
          serial_number: "97306",
          capacity: "100"
        }
      ],
      license_end_date: "2038-12-10",
      setup_type: "New",
      license_id: 7,
      combined_unit_count: 0,
      customer_name: "Cumulus",
      customer_id: 5,
      department: "Sales",
      order_id: 12345697,
      requester_name: "Sagar Todkar",
      status: "PENDING"
    },
    {
      additional_unit_count: 0,
      country: "India",
      purpose: "Commercial use",
      license_type: "Commercial",
      requester_email: "sagar.todkar@cumulus-systems.com",
      license_start_date: "2019-12-10",
      package_type: "HPA Foundation",
      license_key: [
        {
          storage_system_model: "VSP G200",
          license_key_id: 8,
          license_id: 8,
          vendor: "vendor",
          serial_number: "412358",
          capacity: "30"
        },
        {
          storage_system_model: "VSP F700",
          license_key_id: 9,
          license_id: 8,
          vendor: "vendor",
          serial_number: "97306",
          capacity: "100"
        },
        {
          storage_system_model: "VSP F700",
          license_key_id: 10,
          license_id: 8,
          vendor: "vendor",
          serial_number: "97306",
          capacity: "100"
        }
      ],
      license_end_date: "2038-12-10",
      setup_type: "New",
      license_id: 8,
      combined_unit_count: 0,
      customer_name: "Cumulus",
      customer_id: 5,
      department: "Sales",
      order_id: 1234561197,
      requester_name: "Sagar Todkar",
      status: "PENDING"
    }
  ];
}
