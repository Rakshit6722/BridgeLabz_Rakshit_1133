// You have a class Report that generates a report, prints it, and saves it to a file. Refactor the class to adhere to the SRP.

class Report{
    generateReport(){
        console.log("Generating report")
        return "Report.pdf"
    }
}

class PrintReport{
    static print(report){
        console.log("Printing report", report)
    }
}

class SaveReport{
    static save(report){
        console.log("Saving report", report)
    }
}

const report = new Report()
const report1 = report.generateReport(report)

const printReport = PrintReport.print(report1)
const saveReport = SaveReport.save(report1)
