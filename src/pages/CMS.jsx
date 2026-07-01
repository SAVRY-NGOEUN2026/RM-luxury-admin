import React, { useState } from 'react';
import { Save, LayoutTemplate, Type, Image as ImageIcon, Megaphone, Plus, Trash2, Mail, MapPin } from 'lucide-react';

const CMS = ({ activeTab = 'hero' }) => {
    // Header & Hero state
    const [brandTitle, setBrandTitle] = useState('RM LUXURY');
    const [brandTagline, setBrandTagline] = useState('Clothes Collection');
    const [heroLabel, setHeroLabel] = useState('SS 2026 Collection');
    const [heroTitle, setHeroTitle] = useState('RM LUXURY');
    const [heroTitleEm, setHeroTitleEm] = useState('Collection');
    const [heroDesc, setHeroDesc] = useState('Curated luxury for women and men. Ships to Cambodia and worldwide.');
    const [statStyles, setStatStyles] = useState('19');
    const [statCollections, setStatCollections] = useState('9');

    // Announcement & Promo state
    const [topbarText, setTopbarText] = useState('Free Shipping Over $50');
    const [seasonTag, setSeasonTag] = useState('SS 2026');
    const [shipsTo, setShipsTo] = useState('Cambodia and Worldwide');
    const [promoCode, setPromoCode] = useState('RMLUX40');
    const [promoDiscount, setPromoDiscount] = useState('40');
    const [annMessages, setAnnMessages] = useState([
        'Women SS 2026 New Arrivals',
        'Men Style Edit Smart Casual and Streetwear',
        'Use code RMLUX40 for 40 percent off',
        'Free shipping over $50',
    ]);

    // Trust bar / stats state
    const [trustBadges, setTrustBadges] = useState([
        { icon: 'bi-truck', title: 'Free Shipping', sub: 'Orders over $50' },
        { icon: 'bi-arrow-repeat', title: 'Easy Returns', sub: '14 day policy' },
        { icon: 'bi-shield-check', title: 'Secure Checkout', sub: 'KHQR / ABA / Visa' },
        { icon: 'bi-headset', title: 'Support', sub: 'Mon - Sat, 9am - 6pm' },
    ]);
    const [statTotalStyles, setStatTotalStyles] = useState('35+');
    const [statCollections2, setStatCollections2] = useState('2');
    const [statCountries, setStatCountries] = useState('50+');

    // Newsletter state
    const [nlTitle, setNlTitle] = useState('JOIN THE RM LUXURY FAMILY');
    const [nlSubtitle, setNlSubtitle] = useState('Exclusive deals and new arrivals straight to your inbox.');

    // Footer state
    const [footerDesc, setFooterDesc] = useState('Curated luxury fashion for women and men. Ships to Cambodia and worldwide.');
    const [footerAddress, setFooterAddress] = useState('Phnom Penh, Cambodia');
    const [footerEmail, setFooterEmail] = useState('hello@rmluxury.com');
    const [footerCopyright, setFooterCopyright] = useState('2026 RM Luxury All rights reserved');

    const handleSave = (e) => {
        e.preventDefault();
        alert('Content saved successfully! (In a real app, this would save to a database or the storefront\'s data.js)');
    };

    const updateAnnMessage = (i, value) => {
        const copy = [...annMessages];
        copy[i] = value;
        setAnnMessages(copy);
    };
    const addAnnMessage = () => setAnnMessages([...annMessages, '']);
    const removeAnnMessage = (i) => setAnnMessages(annMessages.filter((_, idx) => idx !== i));

    const updateBadge = (i, field, value) => {
        const copy = [...trustBadges];
        copy[i] = { ...copy[i], [field]: value };
        setTrustBadges(copy);
    };

    const getPageTitle = () => {
        switch (activeTab) {
            case 'hero': return 'Header & Hero';
            case 'announcement': return 'Announcement Bar & Promo';
            case 'trust': return 'Trust Bar & Stats';
            case 'newsletter': return 'Newsletter Section';
            case 'footer': return 'Footer & Contact';
            default: return 'Content Management';
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                    {getPageTitle()}
                </h1>
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors shadow-sm"
                >
                    <Save size={18} /> Save Changes
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">

                {activeTab === 'hero' && (
                    <form className="space-y-8" onSubmit={handleSave}>
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                <Type size={16} className="text-primary"/> Brand Identity
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Brand Title (Navbar)</label>
                                    <input
                                        type="text"
                                        value={brandTitle}
                                        onChange={(e) => setBrandTitle(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Tagline (under logo)</label>
                                    <input
                                        type="text"
                                        value={brandTagline}
                                        onChange={(e) => setBrandTagline(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Hero Text Content */}
                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                <LayoutTemplate size={16} className="text-primary"/> Hero Text
                            </h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Hero Label (small pill above title)</label>
                                <input
                                    type="text"
                                    value={heroLabel}
                                    onChange={(e) => setHeroLabel(e.target.value)}
                                    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Main Title</label>
                                    <input
                                        type="text"
                                        value={heroTitle}
                                        onChange={(e) => setHeroTitle(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Title Emphasis (italic line)</label>
                                    <input
                                        type="text"
                                        value={heroTitleEm}
                                        onChange={(e) => setHeroTitleEm(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                                <textarea
                                    value={heroDesc}
                                    onChange={(e) => setHeroDesc(e.target.value)}
                                    rows="2"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Stat: Styles count</label>
                                    <input
                                        type="text"
                                        value={statStyles}
                                        onChange={(e) => setStatStyles(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Stat: Collections count</label>
                                    <input
                                        type="text"
                                        value={statCollections}
                                        onChange={(e) => setStatCollections(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Hero Media Content */}
                        <div className="space-y-6 pt-4 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                <ImageIcon size={16} className="text-primary"/> Hero Images
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Women Hero Images (shown on "All" / "Women" tab)</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary transition-colors flex flex-col items-center justify-center h-32 bg-gray-50">
                                        <input type="file" accept="image/*" multiple className="hidden" id="heroWomenUpload" />
                                        <label htmlFor="heroWomenUpload" className="cursor-pointer flex flex-col items-center">
                                            <ImageIcon size={24} className="text-gray-400 mb-2" />
                                            <span className="text-sm font-medium text-primary hover:underline">Upload Images</span>
                                            <span className="text-xs text-gray-500 mt-1">Portrait, transparent background recommended</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Men Hero Images (shown on "Men" tab)</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary transition-colors flex flex-col items-center justify-center h-32 bg-gray-50">
                                        <input type="file" accept="image/*" multiple className="hidden" id="heroMenUpload" />
                                        <label htmlFor="heroMenUpload" className="cursor-pointer flex flex-col items-center">
                                            <ImageIcon size={24} className="text-gray-400 mb-2" />
                                            <span className="text-sm font-medium text-primary hover:underline">Upload Images</span>
                                            <span className="text-xs text-gray-500 mt-1">Portrait, transparent background recommended</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                )}

                {activeTab === 'announcement' && (
                    <form className="space-y-8" onSubmit={handleSave}>
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                <Megaphone size={16} className="text-primary"/> Top Bar
                            </h3>
                            <p className="text-gray-500 text-sm">The thin bar above the main navigation.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Free Shipping Message</label>
                                    <input
                                        type="text"
                                        value={topbarText}
                                        onChange={(e) => setTopbarText(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Season Tag</label>
                                    <input
                                        type="text"
                                        value={seasonTag}
                                        onChange={(e) => setSeasonTag(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Ships To</label>
                                    <input
                                        type="text"
                                        value={shipsTo}
                                        onChange={(e) => setShipsTo(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-gray-700">Promo Code</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Code</label>
                                    <input
                                        type="text"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary uppercase"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Discount (%)</label>
                                    <input
                                        type="number"
                                        value={promoDiscount}
                                        onChange={(e) => setPromoDiscount(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-bold text-gray-700">Scrolling Announcement Messages</h3>
                                <button type="button" onClick={addAnnMessage} className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark">
                                    <Plus size={14} /> Add Message
                                </button>
                            </div>
                            <div className="space-y-2">
                                {annMessages.map((msg, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            value={msg}
                                            onChange={(e) => updateAnnMessage(i, e.target.value)}
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                        />
                                        <button type="button" onClick={() => removeAnnMessage(i)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </form>
                )}

                {activeTab === 'trust' && (
                    <form className="space-y-8" onSubmit={handleSave}>
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-gray-700">Trust Badges</h3>
                            <p className="text-gray-500 text-sm">The 4 icon badges shown under the hero (Free Shipping, Easy Returns, etc.)</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {trustBadges.map((badge, i) => (
                                    <div key={i} className="border border-gray-200 rounded-lg p-4 space-y-2">
                                        <label className="block text-xs font-medium text-gray-500">Badge {i + 1}</label>
                                        <input
                                            type="text"
                                            value={badge.title}
                                            onChange={(e) => updateBadge(i, 'title', e.target.value)}
                                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                            placeholder="Title"
                                        />
                                        <input
                                            type="text"
                                            value={badge.sub}
                                            onChange={(e) => updateBadge(i, 'sub', e.target.value)}
                                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                            placeholder="Subtitle"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-gray-700">Stats Strip</h3>
                            <p className="text-gray-500 text-sm">The number strip further down the homepage (Total Styles, Collections, Countries Shipped).</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Total Styles</label>
                                    <input
                                        type="text"
                                        value={statTotalStyles}
                                        onChange={(e) => setStatTotalStyles(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Collections</label>
                                    <input
                                        type="text"
                                        value={statCollections2}
                                        onChange={(e) => setStatCollections2(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Countries Shipped</label>
                                    <input
                                        type="text"
                                        value={statCountries}
                                        onChange={(e) => setStatCountries(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                )}

                {activeTab === 'newsletter' && (
                    <form className="space-y-6" onSubmit={handleSave}>
                        <p className="text-gray-500 text-sm">Manage the "Join the Family" email signup section.</p>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
                            <input
                                type="text"
                                value={nlTitle}
                                onChange={(e) => setNlTitle(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                            <textarea
                                rows="2"
                                value={nlSubtitle}
                                onChange={(e) => setNlSubtitle(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                    </form>
                )}

                {activeTab === 'footer' && (
                    <form className="space-y-6" onSubmit={handleSave}>
                        <p className="text-gray-500 text-sm">Manage the store description, contact details, and copyright line shown in the footer.</p>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Footer Description</label>
                            <textarea
                                rows="2"
                                value={footerDesc}
                                onChange={(e) => setFooterDesc(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1.5"><MapPin size={14}/> Address</label>
                                <input
                                    type="text"
                                    value={footerAddress}
                                    onChange={(e) => setFooterAddress(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1.5"><Mail size={14}/> Contact Email</label>
                                <input
                                    type="email"
                                    value={footerEmail}
                                    onChange={(e) => setFooterEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Copyright Line</label>
                            <input
                                type="text"
                                value={footerCopyright}
                                onChange={(e) => setFooterCopyright(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="pt-2">
                            <p className="text-xs text-gray-400">Payment badges (VISA, ABA, KHQR) and social links are managed in Settings.</p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default CMS;
