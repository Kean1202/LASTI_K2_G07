"use client"

import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import React, {useEffect, useState} from "react";


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
        
	];

    const rows = [
        {
            key: "1",
            ID_hewan: "001",
            jenis_hewan: "Sapi",
            siklus_hewan: "Mature",
        },

        {
            key: "2",
            ID_hewan: "002",
            jenis_hewan: "Sapi",
            siklus_hewan: "Juvenile",
        },

        {
            key: "3",
            ID_hewan: "002",
            jenis_hewan: "Ayam",
            siklus_hewan: "Egg-laying",
        },
    ]

	// table rows
  
    return (
        <Table aria-label="Tabel Pertumbuhan Tanaman" align="center" shadow="md" isStriped>
            <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}  className="green_gradient font-bold">{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.key} align="center">
                            {(columnKey) => <TableCell className="font-inter">{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
  )
}

export default SiklusTable