import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    PDFViewer,
} from "@react-pdf/renderer";
import { FC, useEffect, useState } from "react";

import l1 from "../../../../assets/dashboardIcons/l1.png";
import CommonLoader from "../../../layout/Loader/CommonLoader";

// Create styles
const styles = StyleSheet.create({
    page: {
        fontFamily: "Helvetica",
        padding: "20px",
    },
    HPdiv1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

type Props = {};

const PreviewInvoice: FC<Props> = () => {
    const [loading, setLoading] = useState(true);
    const invoiceData = {
        hospitalName: "The Royal London Hospital",
        hospitalLogo:
            "https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png",
        hospitalAddress: "123 Main St, City, Country, London",
        hospitalPhone: "+1234567890",
        hospitalEmail: "asd@example.com",
        invoiceId: "INV-001",
        invoiceDate: "2023-10-28",
        invoiceDueDate: "2023-11-30",
        invoiceItems: [
            {
                description: "Item 1",
                price: 50,
                qty: 1,
            },
            {
                description: "Item 1",
                price: 100,
                qty: 1,
            },
            {
                description: "Item 1",
                price: 200,
                qty: 2,
            },
        ],
    };

    // Calculate total amount for the invoice items
    const totalAmount = invoiceData.invoiceItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    // Define discount and tax values (modify these as needed)
    const discount = 10; // Change this to your discount value
    const taxRate = 0.15; // Change this to your tax rate (e.g., 0.1 for 10%)

    // Calculate discount and tax amounts
    const discountAmount = (totalAmount * discount) / 100;
    const taxAmount = totalAmount * taxRate;

    // Calculate the grand total
    const grandTotal = totalAmount - discountAmount + taxAmount;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="h-full w-full">
            {loading ? (
                <CommonLoader />
            ) : (
                <PDFViewer className="w-full min-h-[100vh]">
                    <Document>
                        <Page size="A4" style={styles.page}>
                            {/* Header */}
                            <View style={styles.HPdiv1}>
                                <View
                                    style={{
                                        height: "120px",
                                        width: "auto",

                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        src={l1}
                                        style={{
                                            height: "120px",
                                            width: "auto",
                                            objectFit: "cover",
                                        }}
                                    />
                                </View>
                                <View
                                    style={{
                                        height: "120px",
                                        width: "auto",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: "24px",
                                            fontWeight: "bold",
                                            color: "#003C73",
                                        }}
                                    >
                                        Invoice
                                    </Text>
                                </View>
                            </View>

                            {/* Company info */}

                            <View
                                style={{
                                    width: "100%",
                                    margin: "30px 0",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    gap: "10px",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: "26px",
                                        fontWeight: "black",
                                        color: "#003C73",
                                    }}
                                >
                                    {invoiceData?.hospitalName}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: "14px",
                                        maxWidth: "280px",
                                        margin: "0",
                                        fontWeight: "normal",
                                        color: "#003C73",
                                    }}
                                >
                                    {invoiceData?.hospitalAddress}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "normal",
                                        color: "#455A64",
                                    }}
                                >
                                    {invoiceData?.hospitalPhone}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "normal",
                                        color: "#455A64",
                                    }}
                                >
                                    {invoiceData?.hospitalEmail}
                                </Text>
                            </View>

                            {/* Invoice Info */}

                            <View
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <View
                                    style={{
                                        width: "200px",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        fontSize: "12px",
                                        fontWeight: "normal",
                                        color: "#455A64",
                                    }}
                                >
                                    <Text>INVOICE Number:</Text>

                                    <Text>{invoiceData.invoiceId}</Text>
                                </View>

                                <View
                                    style={{
                                        width: "200px",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        fontSize: "12px",
                                        fontWeight: "normal",
                                        color: "#455A64",
                                    }}
                                >
                                    <Text>INVOICE Date:</Text>

                                    <Text>{invoiceData.invoiceDate}</Text>
                                </View>

                                <View
                                    style={{
                                        width: "200px",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        fontSize: "12px",
                                        fontWeight: "normal",
                                        color: "#455A64",
                                    }}
                                >
                                    <Text>Due:</Text>

                                    <Text>{invoiceData.invoiceDueDate}</Text>
                                </View>
                            </View>

                            {/* table */}

                            <View
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "flex-end",
                                }}
                            >
                                {/* Table */}
                                <View
                                    style={{
                                        width: "100%",

                                        margin: "20px 0",
                                        border: "1px solid #455A64",
                                    }}
                                >
                                    <View
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                            fontWeight: "extrabold",
                                            color: "#003C73",

                                            fontSize: "10px",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                width: "70%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: "10px",
                                            }}
                                        >
                                            Description
                                        </Text>
                                        <Text
                                            style={{
                                                width: "10%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: "10px",
                                            }}
                                        >
                                            Price
                                        </Text>
                                        <Text
                                            style={{
                                                width: "10%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: "10px",
                                            }}
                                        >
                                            Qty
                                        </Text>
                                        <Text
                                            style={{
                                                width: "10%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: "10px",
                                            }}
                                        >
                                            Total
                                        </Text>
                                    </View>
                                    {/* Iterate through your invoice items */}
                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "100%",
                                            fontSize: "10px",

                                            // borderLeft: "1px solid #455A64",
                                            // borderRight: "1px solid #455A64",
                                            // borderBottom: "1px solid #003C73",
                                        }}
                                    >
                                        {invoiceData?.invoiceItems?.map(
                                            (item, i) => (
                                                <View
                                                    key={i}
                                                    style={{
                                                        width: "100%",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent:
                                                            "flex-start",
                                                        alignItems: "center",
                                                        borderTop:
                                                            "1px solid #455A64",
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            width: "70%",
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                            padding: "10px",
                                                        }}
                                                    >
                                                        {item.description}
                                                    </Text>

                                                    <Text
                                                        style={{
                                                            width: "10%",
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                            padding: "10px",
                                                        }}
                                                    >
                                                        {item.price}
                                                    </Text>

                                                    <Text
                                                        style={{
                                                            width: "10%",
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                            padding: "10px",
                                                        }}
                                                    >
                                                        {item.qty}
                                                    </Text>

                                                    <Text
                                                        style={{
                                                            width: "10%",
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                            padding: "10px",
                                                        }}
                                                    >
                                                        {item.price * item.qty}
                                                    </Text>
                                                </View>
                                            )
                                        )}
                                    </View>
                                    {/* Add more rows for other items */}
                                </View>

                                {/* total */}

                                <View
                                    style={{
                                        width: "300px",
                                        padding: "10px",
                                        borderRadius: "10px",
                                        backgroundColor: "#DFE4EA",
                                        fontSize: "12px",
                                    }}
                                >
                                    <View
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "100%",
                                            gap: "10px",
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                fontSize: "12px",
                                                fontWeight: "normal",
                                                color: "#455A64",
                                            }}
                                        >
                                            <Text>Sub total (excl. GST)</Text>

                                            <Text>
                                                {totalAmount.toFixed(2)}
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                fontSize: "12px",
                                                fontWeight: "normal",
                                                color: "#455A64",
                                            }}
                                        >
                                            <Text>Discount</Text>

                                            <Text>
                                                {discountAmount.toFixed(2)}
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                fontSize: "12px",
                                                fontWeight: "normal",
                                                color: "#455A64",
                                            }}
                                        >
                                            <Text>TAX</Text>

                                            <Text>{taxAmount.toFixed(2)}</Text>
                                        </View>

                                        <View
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                fontSize: "12px",
                                                fontWeight: "normal",
                                                color: "red",
                                            }}
                                        >
                                            <Text>Grand Total</Text>

                                            <Text>{grandTotal.toFixed(2)}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Page>
                    </Document>
                </PDFViewer>
            )}
        </div>
    );
};

export default PreviewInvoice;
