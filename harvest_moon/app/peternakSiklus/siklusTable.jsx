"use client";
import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import ButtonInTable from "@/components/ButtonInTable";

const SiklusTable = () => {
    // Table columns
	const columns = [
		{
			key: "ID_hewan",
			label: "ID",
		},
        {
			key: "jenis_hewan",
			label: "JENIS",
		},
		{
			key: "siklus_hewan",
			label: "SIKLUS",
		},
        {
            key: "action_produksi",
            label: "ACTION",
        }
	];

    const siklusSapi = ["Juvenile", "Mature", "Lactation"];
    const siklusAyam = ["Juvenile", "Mature", "Egg-laying"];

    const rows = [
        {
            key: "1",
            ID_hewan: "001",
            jenis_hewan: "Sapi",
            siklus_hewan: 1,
            action_tanaman: 
            <ButtonInTable
                buttonText={"Produksi"}
                size="small"
                popupMessage={"Lakukan Produksi"}
            />
        },

        {
            key: "2",
            ID_hewan: "002",
            jenis_hewan: "Sapi",
            siklus_hewan: 0,
            action_tanaman: 
            <ButtonInTable
                buttonText={"Produksi"}
                size="small"
                popupMessage={"Lakukan Produksi"}
            />
        },

        {
            key: "3",
            ID_hewan: "002",
            jenis_hewan: "Ayam",
            siklus_hewan: 2,
            action_tanaman: 
            <ButtonInTable
                buttonText={"Produksi"}
                size="small"
                popupMessage={"Lakukan Produksi"}
            />
        },
    ]

    return (
        <Table aria-label="Tabel Pertumbuhan Tanaman" align="center" shadow="md" isStriped>
            <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}  className="green_gradient font-bold">{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.key} align="center">
                        {(columnKey) => {
                            if (columnKey === "siklus_hewan") {
                                return <TableCell className="font-inter text-center">{item.jenis_hewan === "Sapi" ? siklusSapi[item[columnKey]] : siklusAyam[item[columnKey]]}</TableCell>;
                            } else {
                                return <TableCell className="font-inter text-center">{getKeyValue(item, columnKey)}</TableCell>;
                            }
                        }}
                    </TableRow>
                )}
            </TableBody>
        </Table>
  )
}

export default SiklusTable