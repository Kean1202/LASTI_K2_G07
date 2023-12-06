"use client"

import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import React, {useEffect, useState} from "react";


const KesehatanTable = () => {
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
			key: "kondisi_hewan",
			label: "KONDISI",
		},
        {
            key: "action_hewan",
            label: "ACTION",
        },
        
	];

    const rows = [
        {
            key: "1",
            ID_hewan: "001",
            jenis_hewan: "Sapi",
            kondisi_hewan: "Healthy",
            action_hewan: "Taroh button di sini"
        },

        {
            key: "2",
            ID_hewan: "002",
            jenis_hewan: "Sapi",
            kondisi_hewan: "Sick",
            action_hewan: "Taroh button di sini"
        },

        {
            key: "3",
            ID_hewan: "003",
            jenis_hewan: "Ayam",
            kondisi_hewan: "Healthy",
            action_hewan: "Taroh button di sini"
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

export default KesehatanTable