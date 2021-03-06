import { ILocaleMember } from './ILocale';
import Product from '../entities/Product';
import { DBRawObject, PyroObjectId, DBCreateObject } from '@pyro/db';

export interface IPromotionCreateObject extends DBCreateObject {
	/**
	 * Promotion title locale
	 *
	 * @type {IPromotionTitle[]}
	 * @memberof IPromotionCreateObject
	 */
	title: IPromotionTitle[];

	/**
	 * Promotion description locale
	 *
	 * @type {IPromotionDescription[]}
	 * @memberof IPromotionCreateObject
	 */
	description: IPromotionDescription[];

	/**
	 *
	 * @type {boolean}
	 * @memberof IPromotionCreateObject
	 */
	active: boolean;

	/**
	 * @type {Date}
	 * @memberof IPromotionCreateObject
	 */
	activeFrom: Date;

	/**
	 * @type {Date}
	 * @memberof IPromotionCreateObject
	 */
	activeTo: Date;

	/**
	 * Url to Promotion picture/photo
	 *
	 * @type {string}
	 * @memberof IPromotionCreateObject
	 */
	image: string;

	/**
	 * @type {Product}
	 * @memberof IPromotionCreateObject
	 */
	product: Product;

	/**
	 * @type {number}
	 * @memberof IPromotionCreateObject
	 */
	purchasesCount: number;
}

export interface IPromotion extends IPromotionCreateObject, DBRawObject {
	_id: PyroObjectId;
}

export interface IPromotionDescription extends ILocaleMember {}
export interface IPromotionTitle extends ILocaleMember {}
