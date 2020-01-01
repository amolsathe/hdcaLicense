import { HdcaService } from "./../../hdca.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-applied-licence",
  templateUrl: "./applied-licence.component.html",
  styleUrls: ["./applied-licence.component.scss"]
})
export class AppliedLicenceComponent implements OnInit {
  collectionSize: number;
  displayedColumns: string[] = [
    "customer_name",
    "country",
    "requester_name",
    "requester_email",
    "department",
    "license_start_date",
    "license_end_date",
    "order_id",
    "package_type",
    "setup_type",
    "license_type",
    "combined_unit_count",
    "additional_unit_count",
    "purpose",
    "status",
    //"license_key",
    "action"
  ];
  dataSource: any;
  dataLoaded = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private hdcaService: HdcaService) {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPendingLincenses() {
    let response = this.hdcaService.getPendingLicenses();
    this.dataSource = new MatTableDataSource<CustomerData>(response);
    this.collectionSize = response.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataLoaded = true;
  }

  ngOnInit() {
    this.getPendingLincenses();
  }
}

export interface CustomerData {
  license_id: number;
  customer_id: number;
  customer_name: string;
  country: string;
  requester_name: string;
  requester_email: string;
  department: string;
  license_start_date: string;
  license_end_date: string;
  order_id: number;
  package_type: string;
  setup_type: string;
  license_type: string;
  combined_unit_count: number;
  additional_unit_count: number;
  purpose: string;
  status: string;
  license_key: LicenseKey[];
}
export interface LicenseKey {
  license_key_id: number;
  license_id: number;
  storage_system_model: string;
  vendor: string;
  capacity: string;
  serial_number: string;
}
