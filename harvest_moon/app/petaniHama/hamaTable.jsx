"use client"

import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import ButtonInTable from "@/components/ButtonInTable";



const HamaTable = (props) => {
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


    function mapRows(data){
        return data.map((currData) => {
            return {
                key: currData.id,
                cluster_tanaman: currData.Cluster,
                kondisi_hama: currData.Kondisi,
                action_hama:
                <ButtonInTable
                    buttonText={"Warn"}
                    size="small"
                    popupMessage={`Peringatan telah dikirim kepada petani penanggung jawab cluster ${currData.Cluster}`}
                />
            }
        })
    }
  
    return (
        <Table aria-label="Tabel Pertumbuhan Tanaman" align="center" shadow="md" isStriped>
            <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}  className="green_gradient font-bold">{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={mapRows(props.dataTanaman)}>
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