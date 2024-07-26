"use client"
import { useTestModal } from '@/hooks/use-test-modal'
import React from 'react'
import { Modal } from '../ui/modal';

const TestModal = () => {
    const testModal = useTestModal();
    return (
        <Modal title="Create Store" description="Add a new store to manage products" isOpen={testModal.isOpen} onClose={testModal.onClose}>
            <h1>Test modal</h1>
        </Modal>
    )
}

export default TestModal