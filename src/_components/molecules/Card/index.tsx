"use client";
import React, { useState } from "react";
import { Button, Card, Col, Image } from "antd";
import { Product } from "@/types/product.type";
import Link from "next/link";

const { Meta } = Card;
export default function CardItem(product: Product) {
  const { id, brand, description, price, rating, thumbnail, title } = product;

  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
      <Card
        hoverable
        cover={
          <Image
            alt={title}
            src={thumbnail}
            height={250}
            style={{ borderColor: " 1px solid #e5e7eb" }}
          />
        }
        bordered={true}
      >
        {/* <Link href={`/product/${id}`}> */}
        <Meta title={title} description={description} className="h-20" />
        {/* </Link> */}
      </Card>
    </Col>
  );
}
