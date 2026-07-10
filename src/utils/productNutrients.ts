import { productsById } from '../data/products';
import type { Nutrients } from '../types';
import { calcItemNutrients, emptyNutrients } from './nutrients';

export function getProductNutrients(productId: string, portions: number): Nutrients {
  const product = productsById.get(productId);
  if (!product) return emptyNutrients();
  return calcItemNutrients({ product, portions });
}
