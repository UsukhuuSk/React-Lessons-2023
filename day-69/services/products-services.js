import { pool } from "../config/mysql-config.js";

export async function search(keyword) {
  const [rows] = await pool.query(
    `select * from products WHERE title LIKE '%${keyword}%'`
  );

  await Promise.all(
    rows.map(async (row) => {
      console.log(row);
      const descriptions = await getDescriptions(row.id);
      row.description = descriptions;
      const reviews = await getReviews(row.id);
      row.reviews = reviews;
      const images = await getImages(row.id);
      row.images = images;
      const size = await getSize(row.id);
      row.size = size;
      const colors = getColors(row.id);
      row.colors = colors;
      console.log(descriptions);
    })
  );
  return rows[0];
}
export async function getDescriptions(productId) {
  const [rows] = await pool.query(
    `select * from product_description WHERE product_id=?`,
    [productId]
  );
  return rows;
}

export async function getReviews(productId) {
  const [rows] = await pool.query(
    `select * from product_reviews WHERE product_id=?`,
    [productId]
  );
  return rows;
}
export async function getImages(productId) {
  const [rows] = await pool.query(
    `select * from product_images WHERE product_id=?`,
    [productId]
  );
  return rows;
}
export async function getSize(productId) {
  const [rows] = await pool.query(
    `select * from product_size WHERE product_id=?`,
    [productId]
  );
  return rows;
}
export async function getColors(productId) {
  const [rows] = await pool.query(
    `select * from product_colors WHERE product_id=?`,
    [productId]
  );
  return rows;
}
