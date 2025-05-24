import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

export const generateReceipt = (bookingData) => {
  const {
    userName,
    userEmail,
    userPhone,
    farmhouseName,
    farmhouseLocation,
    plotSize,
    amount,
    bookingId,
    bookingDate = new Date().toLocaleDateString(),
  } = bookingData

  // Create new PDF document
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  })

  // Set background color
  doc.setFillColor(250, 250, 250)
  doc.rect(0, 0, 210, 297, "F")

  // Add border
  doc.setDrawColor(40, 167, 69) // Green border
  doc.setLineWidth(0.5)
  doc.rect(10, 10, 190, 277)

  // Add header with company logo
  doc.setFillColor(40, 167, 69) // Green header
  doc.rect(10, 10, 190, 30, "F")

  // Add company name as text (since we don't have an actual logo)
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.setFont("helvetica", "bold")
  doc.text("RKS Infrabuild & Homes Pvt. LTD", 105, 25, { align: "center" })
  doc.setFontSize(12)
  doc.text("Premium Farmhouse Lands In Bhopal", 105, 32, { align: "center" })

  // Add receipt title
  doc.setTextColor(40, 40, 40)
  doc.setFontSize(18)
  doc.setFont("helvetica", "bold")
  doc.text("BOOKING RECEIPT", 105, 50, { align: "center" })

  // Add receipt number and date
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  // doc.text(`Receipt #: ${bookingId || "FH" + Math.floor(Math.random() * 10000)}`, 20, 60)
  doc.text(`Date: ${bookingDate}`, 190, 60, { align: "right" })

  // Add divider
  doc.setDrawColor(200, 200, 200)
  doc.setLineWidth(0.2)
  doc.line(20, 65, 190, 65)

  // Customer Information
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(40, 40, 40)
  doc.text("Customer Information", 20, 75)

  doc.setFontSize(11)
  doc.setFont("helvetica", "normal")
  doc.text(`Name: ${userName}`, 25, 85)
  doc.text(`Email: ${userEmail}`, 25, 92)
  doc.text(`Phone: ${userPhone}`, 25, 99)

  // Farmhouse Information
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Property Details", 20, 115)

  doc.setFontSize(11)
  doc.setFont("helvetica", "normal")
  doc.text(`Farmhouse: ${farmhouseName}`, 25, 125)
  doc.text(`Location: ${farmhouseLocation}`, 25, 132)
  doc.text(`Land Size: ${plotSize} sqft`, 25, 139)

  // Payment Information
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Payment Details", 20, 155)

  // Create payment table
  autoTable(doc, {
    startY: 160,
    head: [["Description", "Amount"]],
    body: [
      ["Booking Amount", `₹${amount.toLocaleString("en-IN")}`],
      ["GST (18%)", `₹${(amount * 0.18).toLocaleString("en-IN")}`],
      ["Total", `₹${(amount * 1.18).toLocaleString("en-IN")}`],
    ],
    theme: "grid",
    headStyles: {
      fillColor: [40, 167, 69],
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
    foot: [["Total Amount Paid", `₹${(amount * 1.18).toLocaleString("en-IN")}`]],
    footStyles: {
      fillColor: [240, 240, 240],
      textColor: [40, 40, 40],
      fontStyle: "bold",
    },
    margin: { left: 25, right: 25 },
  })

  // Terms and conditions
  doc.setFontSize(10)
  doc.setFont("helvetica", "italic")
  doc.setTextColor(100, 100, 100)
  doc.text("Terms & Conditions:", 20, 210)
  doc.text("1. This is a booking receipt and not the final agreement.", 25, 217)
  doc.text("2. The booking amount is non-refundable.", 25, 224)
  doc.text("3. The final agreement will be executed within 30 days of booking.", 25, 231)
  doc.text("4. All disputes are subject to local jurisdiction.", 25, 238)

  // Footer
  doc.setFontSize(9)
  doc.setTextColor(100, 100, 100)
  doc.text("Thank you for choosing Farmhouse Estates!", 105, 260, { align: "center" })
  doc.text("For any queries, please contact: support@farmhouseestates.com | +91 9876543210", 105, 265, {
    align: "center",
  })

  // Add QR code placeholder (represented as a square)
  doc.setDrawColor(40, 40, 40)
  doc.setLineWidth(0.1)
  doc.rect(155, 210, 30, 30)
  doc.setFontSize(8)
  doc.text("Scan for verification", 170, 245, { align: "center" })

  // Save the PDF
  doc.save(`Farmhouse_Booking_Receipt_${bookingId || userName.replace(/\s+/g, "_")}.pdf`)
}
