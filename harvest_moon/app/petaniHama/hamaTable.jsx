"use client"

import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import React, {useEffect, useState} from "react";


const HamaTable = () => {
    // Table columns
	const columns = [
		{
			key: "cluster_tanaman",
			label: "CLUSTER",
		},
		{
			key: "kondisi_hama",
			label: "KONDISI",
		},
        {
            key: "action_hama",
            label: "ACTION",
        }
	];

    const rows = [
        {
            key: "1",
            cluster_tanaman: "A",
            kondisi_hama: "Safe",
            action_hama: "Taroh button di sini"
        },

        {
            key: "2",
            cluster_tanaman: "B",
            kondisi_hama: "Critical",
            action_hama: "Taroh button di sini"
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

export default HamaTable