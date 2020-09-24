import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { PaymentService } from "src/app/services/payment.service";
import { Chart } from "node_modules/chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  paymentList;
  errMessage: string;

  constructor(
    private paymentService: PaymentService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.paymentService.getAllPayments(this.authService.getUserId()).subscribe(
      (data) => {
        this.paymentList = data;
        console.log("Payment Data", data);

        this.createCharts();
      },
      (error) => {
        this.errMessage = error;
      }
    );
  }

  createCharts() {
    //Added by Aman
    var myChart1 = new Chart("myChart1", {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Amount($) in thousands spent in different months",
            // data: [12, 19, 3, 5, 2, 3, 1, 3, 5, 10, 17, 20], // function that calculates and return list
            data: this.monthlyStatistic(),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    // For Graph2
    var myChart2 = new Chart("myChart2", {
      type: "horizontalBar",
      data: {
        labels: [
          "Food",
          "Entertainment",
          "Shopping",
          "Hotel Stay",
          "ATM",
          "Others",
        ],
        datasets: [
          {
            label:
              "Amount($) in thousands spent on different category over a year",
            // data: [13, 5, 10, 17, 9], // function that calculates and return list by category
            data: this.categoryStatistic(),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 159, 64, 1)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    //For Graph3
    var myChart3 = new Chart("myChart3", {
      type: "pie",

      data: {
        labels: ["Food", "Entertainment", "Shopping", "Hotel Stay", "Others"],
        datasets: [
          {
            label: "Amount($) in thousands spent categorywise",
            data: [12, 3, 10, 15, 5],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  }

  monthlyStatistic(): number[] {
    let result: number[];

    result = this.paymentList.reduce(
      (temp, val) => {
        if (val["month"].toLowerCase() === "january") {
          temp[0] += parseInt(val["amount"]);
        } else if (val["month"].toLowerCase() === "february") {
          temp[1] += parseInt(val["amount"]);
        } else if (val["month"].toLowerCase() === "march") {
          temp[2] += parseInt(val["amount"]);
        } else if (val["month"].toLowerCase() === "april") {
          temp[3] += parseInt(val["amount"]);
        } else if (val["month"].toLowerCase() === "may") {
          temp[4] += parseInt(val["amount"]);
        } else if (val["month"].toLowerCase() === "june") {
          temp[5] += parseInt(val["amount"]);
        } else if (val["month"].toLowerCase() === "july") {
          temp[6] += parseInt(val["amount"]);
        } else if (val["month"].toLowerCase() === "august") {
          temp[7] += parseInt(val["amount"]);
        } else if (val["month"].toLowerCase() === "september") {
          temp[8] += parseInt(val["amount"]);
        } else if (val["month"].toLowerCase() === "october") {
          temp[9] += parseInt(val["amount"]);
        } else if (val["month"].toLowerCase() === "november") {
          temp[10] += parseInt(val["amount"]);
        } else if (val["month"].toLowerCase() === "december") {
          temp[11] += parseInt(val["amount"]);
        }
        return temp;
      },
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );

    console.log("Monthly User Data : ", result);

    return result;
  }

  categoryStatistic(): number[] {
    let result: number[];

    result = this.paymentList.reduce(
      (temp, payment) => {
        if (payment["category"].toLowerCase() === "food") {
          temp[0]++;
        } else if (payment["category"].toLowerCase() === "entertainment") {
          temp[1]++;
        } else if (payment["category"].toLowerCase() === "shopping") {
          temp[2]++;
        } else if (payment["category"].toLowerCase() === "hotelstay") {
          temp[3]++;
        } else if (payment["category"].toLowerCase() === "atm") {
          temp[4]++;
        } else if (payment["category"].toLowerCase() === "others") {
          temp[5]++;
        }

        return temp;
      },
      [0, 0, 0, 0, 0, 0]
    );

    console.log("Categorically User Data : ", result);

    return result;
  }
}
