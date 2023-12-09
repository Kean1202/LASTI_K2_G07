"use client";
import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import ButtonInTable from "@/components/ButtonInTable";

const SiklusTable = (props) => {
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
            key: "action_hewan",
            label: "ACTION",
        }
	];

    const siklusSapi = ["Juvenile", "Mature", "Lactation"];
    const siklusAyam = ["Juvenile", "Mature", "Egg-laying"];

    function mapRows(data){
        return data.map((currData) => {
            return {
                key: currData.id,
                jenis_hewan: currData.jenis_hewan,
                siklus_hewan: currData.siklus_hewan,
                action_hama:
                <ButtonInTable
                    buttonText={"Produksi"}
                    size="small"
                    popupMessage={`Perintah telah dikirim ke petani dengan ID hewan ${currData.id}`}
                />
            }
        })
    }
    
    return (
        <Table aria-label="Tabel Siklus Hewan" align="center" shadow="md" isStriped>
            <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}  className="green_gradient font-bold">{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={mapRows(props.dataHewan)}>
                {(item) => (
                    <TableRow key={item.key} align="center">
                    {(columnKey) => {
                        if (columnKey === "siklus_hewan") {
                            return <TableCell className="font-inter text-center">{item.jenis_hewan === "Sapi" ? siklusSapi[item[columnKey]] : siklusAyam[item[columnKey]]}</TableCell>;
                        } else if (columnKey === "action_hewan") {
                            return <TableCell className="font-inter text-center">
                                <ButtonInTable
                                    buttonText={"Produksi"}
                                    size="small"
                                    popupMessage={"Lakukan Produksi"}
                                    onClick={() => resetSiklus(item.key)}
                                />
                            </TableCell>;
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