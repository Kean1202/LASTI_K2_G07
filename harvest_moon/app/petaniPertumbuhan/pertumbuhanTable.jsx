"use client"

import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import React, {useEffect, useState} from "react";


const PertumbuhanTable = () => {
    // Table columns
	const columns = [
		{
			key: "cluster_tanaman",
			label: "CLUSTER",
		},
		{
			key: "kelembapan_tanaman",
			label: "KELEMBAPAN",
		},
		{
			key: "nutrisi_tanaman",
			label: "NUTRISI",
		},
        {
            key: "action_tanaman",
            label: "ACTION",
        }
	];

    const rows = [
        {
            key: "1",
            cluster_tanaman: "A",
            kelembapan_tanaman: "75 %",
            nutrisi_tanaman: "Optimal",
            action_tanaman: "Taroh button di sini"
        },

        {
            key: "2",
            cluster_tanaman: "B",
            kelembapan_tanaman: "45 %",
            nutrisi_tanaman: "Suboptimal",
            action_tanaman: "Taroh button di sini"
        },

        {
            key: "3",
            cluster_tanaman: "C",
            kelembapan_tanaman: "55 %",
            nutrisi_tanaman: "Critical",
            action_tanaman: "Taroh button di sini"
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

export default PertumbuhanTable