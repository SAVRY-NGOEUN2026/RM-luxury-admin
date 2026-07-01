import React, { useState, useMemo } from 'react';
import { Edit2, Trash2, UploadCloud, Star, Search } from 'lucide-react';
import { allProducts } from '../data/products';

const CATEGORIES = ['Women', 'Men', 'Dresses', 'Formal', 'Outerwear', 'Smart Casual', 'Streetwear', 'Y2K Street'];

const emptyForm = {
    name: '',
    gender: 'women',
    cat: 'Women',
    tag: 'women',
    price: '',
    oldPrice: '',
    badge: 'None',
    colors: '',
};

const Products = () => {
    const [products, setProducts] = useState(allProducts);
    const [formData, setFormData] = useState(emptyForm);
    const [imagePreview, setImagePreview] = useState(null);
    const [genderFilter, setGenderFilter] = useState('all');
    const [search, setSearch] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImagePreview(url);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Math.max(0, ...products.map(p => p.id)) + 1,
            name: formData.name,
            cat: formData.cat,
            tag: formData.tag,
            gender: formData.gender,
            price: parseFloat(formData.price) || 0,
            oldPrice: formData.oldPrice ? parseFloat(formData.oldPrice) : null,
            badge: formData.badge === 'None' ? null : formData.badge,
            rating: 5.0,
            rev: 0,
            colors: formData.colors.split(',').map(c => c.trim()).filter(Boolean),
            dots: [],
            img: imagePreview || 'https://placehold.co/300x400/f5f5f5/999?text=RM+Luxury',
            thumbs: [],
        };
        setProducts([newProduct, ...products]);
        setFormData(emptyForm);
        setImagePreview(null);
    };

    const handleDelete = (id) => {
        if (confirm('Remove this product from the catalog?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const filtered = useMemo(() => {
        return products.filter(p => {
            const matchesGender = genderFilter === 'all' || p.gender === genderFilter;
            const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.cat.toLowerCase().includes(search.toLowerCase());
            return matchesGender && matchesSearch;
        });
    }, [products, genderFilter, search]);

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>

            {/* Add Product Form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Add New Style</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                        {/* Input Fields on Left */}
                        <div className="md:col-span-2 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                    placeholder="e.g. Preppy Knit and Pleated Skirt"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                    <select
                                        value={formData.gender}
                                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                    >
                                        <option value="women">Women</option>
                                        <option value="men">Men</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select
                                        value={formData.cat}
                                        onChange={(e) => setFormData({...formData, cat: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                    >
                                        {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        required
                                        value={formData.price}
                                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                        placeholder="0.00"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Old Price ($, optional)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={formData.oldPrice}
                                        onChange={(e) => setFormData({...formData, oldPrice: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                        placeholder="For Sale badge"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Badge</label>
                                    <select
                                        value={formData.badge}
                                        onChange={(e) => setFormData({...formData, badge: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                    >
                                        <option>None</option>
                                        <option>New</option>
                                        <option>Sale</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Colors (comma separated)</label>
                                    <input
                                        type="text"
                                        value={formData.colors}
                                        onChange={(e) => setFormData({...formData, colors: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 focus:bg-white transition-colors"
                                        placeholder="Black, White, Navy"
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors"
                                >
                                    Save Product
                                </button>
                            </div>
                        </div>

                        {/* Image Upload on Right */}
                        <div className="md:col-span-1 flex flex-col">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                            <div className="flex-1 border-2 border-dashed border-gray-400 rounded-lg p-3 text-center hover:border-primary transition-colors relative flex flex-col items-center justify-center bg-transparent min-h-[220px]">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                {imagePreview ? (
                                    <div className="absolute inset-0 w-full h-full p-2">
                                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-md shadow-sm" />
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-gray-500 pointer-events-none">
                                        <UploadCloud size={28} className="mb-2 text-primary" />
                                        <span className="text-sm font-medium">Click to upload image</span>
                                        <span className="text-xs mt-1 text-gray-400">JPG, PNG up to 2MB</span>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </form>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-fit">
                <div className="p-6 border-b border-gray-100 flex flex-wrap gap-4 justify-between items-center bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <h2 className="text-lg font-bold text-gray-900">Catalog</h2>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">{filtered.length} Items</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-1.5">
                            <Search size={16} className="text-gray-400" />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search styles..."
                                className="bg-transparent outline-none ml-2 text-sm w-40"
                            />
                        </div>
                        <div className="flex gap-1 bg-white border border-gray-200 rounded-lg p-1">
                            {['all', 'women', 'men'].map(g => (
                                <button
                                    key={g}
                                    onClick={() => setGenderFilter(g)}
                                    className={`px-3 py-1 rounded-md text-xs font-semibold capitalize transition-colors ${genderFilter === g ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                                >
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b border-gray-200">
                            <tr className="text-[11px] font-bold text-gray-500 uppercase tracking-wider bg-gray-100">
                                <th className="p-4 rounded-tl-lg">Product Info</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Rating</th>
                                <th className="p-4">Badge</th>
                                <th className="p-4 text-right rounded-tr-lg">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {filtered.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img src={product.img} alt={product.name} className="w-12 h-12 rounded-lg object-cover flex-shrink-0 bg-gray-100" />
                                            <div>
                                                <p className="font-semibold text-gray-900 max-w-xs line-clamp-1">{product.name}</p>
                                                <p className="text-xs text-gray-500">{product.cat} &middot; {product.gender === 'women' ? 'Women' : 'Men'}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-semibold text-gray-900">${product.price}</div>
                                        {product.oldPrice && <div className="text-xs text-gray-400 line-through">${product.oldPrice}</div>}
                                    </td>
                                    <td className="p-4 text-gray-700">
                                        <div className="flex items-center gap-1">
                                            <Star size={14} className="fill-primary text-primary" />
                                            {product.rating} <span className="text-xs text-gray-400">({product.rev})</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        {product.badge ? (
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                                product.badge === 'Sale' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                            }`}>
                                                {product.badge}
                                            </span>
                                        ) : (
                                            <span className="text-xs text-gray-300">&mdash;</span>
                                        )}
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors" title="Edit">
                                                <Edit2 size={16} />
                                            </button>
                                            <button onClick={() => handleDelete(product.id)} className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors" title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Products;
