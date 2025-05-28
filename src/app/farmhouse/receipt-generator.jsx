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
    state,
    city,
    razorpayOrderId,
    razorpayPaymentId,
  } = bookingData

  // Create new PDF document
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  })

  // Set background
  doc.setFillColor(255, 255, 255)
  doc.rect(0, 0, 210, 297, "F")

  // Header section with logo
  doc.setFillColor(41, 128, 185) // Professional blue
  doc.rect(0, 0, 210, 40, "F")

  // Add logo
  try {
    const logoImg = new Image()
    logoImg.crossOrigin = "anonymous"
    logoImg.onload = () => {
      // Add logo to PDF (left side of header)
      doc.addImage(logoImg, "JPEG", 15, 8, 25, 25)
    }
    logoImg.src = "/rhome.jpg"

    // Add logo immediately (synchronous approach)
    doc.addImage("/rhome.jpg", "JPEG", 15, 8, 25, 25)
  } catch (error) {
    console.log("Logo not found, proceeding without logo")
  }

  // Company name and details (right side of logo)
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("RKS INFRABUILD & HOMES PVT. LTD", 45, 16)

  doc.setFontSize(8)
  doc.setFont("helvetica", "normal")
  doc.text("Premium Farmhouse Lands In Bhopal", 45, 22)
  doc.text("Email: info@rksinfrabuild.com | Phone: +91 9876543210", 45, 27)
  doc.text("Website: www.gdrgroup72.com", 45, 32)

  // Receipt title
  doc.setTextColor(41, 128, 185)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("PAYMENT RECEIPT", 105, 52, { align: "center" })

  // Receipt details line
  doc.setTextColor(100, 100, 100)
  doc.setFontSize(8)
  doc.setFont("helvetica", "normal")
  doc.text(`Receipt No: GDR-${bookingId}`, 20, 62)
  doc.text(`Date: ${bookingDate}`, 190, 62, { align: "right" })

  // Separator line
  doc.setDrawColor(200, 200, 200)
  doc.setLineWidth(0.5)
  doc.line(20, 67, 190, 67)

  // Customer Information
  doc.setTextColor(41, 128, 185)
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("BILL TO:", 20, 77)

  doc.setTextColor(60, 60, 60)
  doc.setFontSize(8)
  doc.setFont("helvetica", "normal")
  doc.text(userName, 20, 84)
  doc.text(userEmail, 20, 89)
  doc.text(userPhone, 20, 94)
  doc.text(`${city}, ${state}`, 20, 99)

  // Property Information
  doc.setTextColor(41, 128, 185)
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("PROPERTY DETAILS:", 110, 77)

  doc.setTextColor(60, 60, 60)
  doc.setFontSize(8)
  doc.setFont("helvetica", "normal")
  doc.text(`Farmhouse: ${farmhouseName}`, 110, 84)
  doc.text(`Location: ${farmhouseLocation}`, 110, 89)
  doc.text(`Plot Size: ${plotSize} sqft`, 110, 94)
  doc.text(`Booking ID: GDR-${bookingId}`, 110, 99)

  // Payment Information
  if (razorpayOrderId || razorpayPaymentId) {
    doc.setTextColor(41, 128, 185)
    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.text("PAYMENT DETAILS:", 20, 112)

    doc.setTextColor(60, 60, 60)
    doc.setFontSize(7)
    doc.setFont("helvetica", "normal")
    if (razorpayOrderId) {
      doc.text(`Order ID: ${razorpayOrderId}`, 20, 119)
    }
    if (razorpayPaymentId) {
      doc.text(`Payment ID: ${razorpayPaymentId}`, 20, 124)
    }
  }

  // Payment table
  autoTable(doc, {
    startY: 135,
    head: [["DESCRIPTION", "AMOUNT"]],
    body: [["Farmhouse Booking Payment", `₹ ${amount.toLocaleString("en-IN")}`]],
    foot: [["TOTAL AMOUNT PAID", `₹ ${amount.toLocaleString("en-IN")}`]],
    theme: "striped",
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 9,
      halign: "center",
    },
    bodyStyles: {
      fontSize: 8,
      textColor: [60, 60, 60],
      fillColor: [248, 249, 250],
    },
    footStyles: {
      fillColor: [41, 128, 185],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 9,
      halign: "center",
    },
    margin: { left: 20, right: 20 },
    columnStyles: {
      0: { cellWidth: 120, halign: "left" },
      1: { cellWidth: 50, halign: "right" },
    },
  })

  // Payment status
  doc.setFillColor(46, 204, 113) // Green background
  doc.rect(20, 160, 170, 10, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(9)
  doc.setFont("helvetica", "bold")
  doc.text("✓ PAYMENT CONFIRMED", 105, 167, { align: "center" })

  // Important notes
  doc.setTextColor(41, 128, 185)
  doc.setFontSize(9)
  doc.setFont("helvetica", "bold")
  doc.text("IMPORTANT NOTES:", 20, 180)

  doc.setTextColor(80, 80, 80)
  doc.setFontSize(7)
  doc.setFont("helvetica", "normal")
  const notes = [
    "• This receipt serves as proof of your booking payment",
    "• Keep this receipt for your records and future reference",
    "• Final documentation will be completed within 30 working days",
    "• Property possession as per agreed timeline in final agreement",
    "• For any queries, contact us at the above mentioned details",
  ]

  let yPos = 187
  notes.forEach((note) => {
    doc.text(note, 25, yPos)
    yPos += 5
  })

  // Terms section
  doc.setTextColor(41, 128, 185)
  doc.setFontSize(9)
  doc.setFont("helvetica", "bold")
  doc.text("TERMS & CONDITIONS:", 20, 220)

  doc.setTextColor(80, 80, 80)
  doc.setFontSize(7)
  doc.setFont("helvetica", "normal")
  const terms = [
    "• Booking amount is non-refundable as per company policy",
    "• All legal disputes subject to Bhopal jurisdiction only",
    "• Company reserves the right to modify terms with prior notice",
  ]

  yPos = 227
  terms.forEach((term) => {
    doc.text(term, 25, yPos)
    yPos += 5
  })

  // Signature section
  doc.setDrawColor(150, 150, 150)
  doc.setLineWidth(0.5)
  doc.line(130, 250, 180, 250)

  doc.setTextColor(100, 100, 100)
  doc.setFontSize(7)
  doc.setFont("helvetica", "normal")
  doc.text("Authorized Signature", 155, 256, { align: "center" })

  // Footer
  doc.setFillColor(245, 245, 245)
  doc.rect(0, 270, 210, 10, "F")

  doc.setTextColor(100, 100, 100)
  doc.setFontSize(7)
  doc.setFont("helvetica", "italic")
  doc.text("Thank you for choosing RKS Infrabuild & Homes for your farmhouse investment!", 105, 276, {
    align: "center",
  })

  // Save the PDF
  doc.save(`RKS_Receipt_${bookingId}.pdf`)
}
