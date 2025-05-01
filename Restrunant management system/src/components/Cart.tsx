import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Dialog, Transition } from '@headlessui/react';

const Cart = () => {
  const { items, isOpen, setCartOpen, updateQuantity, removeItem } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Transition show={isOpen}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-hidden"
        onClose={() => setCartOpen(false)}
      >
        <Transition.Child
          enter="transition-opacity ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <Transition.Child
          enter="transform transition ease-in-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          className="fixed right-0 top-0 h-full w-full max-w-md"
        >
          <div className="flex h-full flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-4 py-6">
              <Dialog.Title className="text-lg font-semibold text-red-900">
                Your Order
              </Dialog.Title>
              <button
                onClick={() => setCartOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={24} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 px-4 py-12">
                <ShoppingBag size={64} className="text-gray-400" />
                <p className="text-lg font-medium text-gray-900">Your cart is empty</p>
                <p className="text-center text-gray-500">
                  Add some delicious items from our menu to get started.
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="rounded-md bg-red-800 px-6 py-3 text-white hover:bg-red-900"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-4 py-6">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 rounded-lg border p-4"
                      >
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-20 rounded-md object-cover"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                          <div className="mt-2 flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="rounded-full bg-gray-100 p-1 hover:bg-gray-200"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="rounded-full bg-gray-100 p-1 hover:bg-gray-200"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t px-4 py-6">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <button className="mt-6 w-full rounded-md bg-red-800 py-3 text-white hover:bg-red-900">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Cart;