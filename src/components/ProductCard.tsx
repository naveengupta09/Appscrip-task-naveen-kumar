"use client";

import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import HeartIcon from "@/components/icons/HeartIcon";
import { formatCurrency } from "@/utils/currency";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const priceLabel = formatCurrency(product.price);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={product.image}
          alt={product.title}
          width={320}
          height={320}
          className={styles.image}
          sizes="(max-width: 720px) 90vw, (max-width: 1024px) 45vw, 22vw"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.meta}>
          <div>
            <span className={styles.signin}>Sign in</span> or Create an account
            to see pricing
          </div>
          <HeartIcon size={20} />
        </div>
      </div>
    </article>
  );
}
