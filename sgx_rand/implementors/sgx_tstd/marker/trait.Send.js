(function() {var implementors = {};
implementors["sgx_tstd"] = ["impl <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxThreadCondvar.html\" title=\"struct sgx_tstd::sync::SgxThreadCondvar\">SgxThreadCondvar</a>","impl <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxThreadMutex.html\" title=\"struct sgx_tstd::sync::SgxThreadMutex\">SgxThreadMutex</a>","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"sgx_tstd/marker/trait.Sized.html\" title=\"trait sgx_tstd::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxMutex.html\" title=\"struct sgx_tstd::sync::SgxMutex\">SgxMutex</a>&lt;T&gt;","impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"sgx_tstd/marker/trait.Sized.html\" title=\"trait sgx_tstd::marker::Sized\">Sized</a>&gt; !<a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxMutexGuard.html\" title=\"struct sgx_tstd::sync::SgxMutexGuard\">SgxMutexGuard</a>&lt;'a, T&gt;","impl <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxReentrantThreadMutex.html\" title=\"struct sgx_tstd::sync::SgxReentrantThreadMutex\">SgxReentrantThreadMutex</a>","impl&lt;T:&nbsp;<a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxReentrantMutex.html\" title=\"struct sgx_tstd::sync::SgxReentrantMutex\">SgxReentrantMutex</a>&lt;T&gt;","impl&lt;'a, T&gt; !<a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxReentrantMutexGuard.html\" title=\"struct sgx_tstd::sync::SgxReentrantMutexGuard\">SgxReentrantMutexGuard</a>&lt;'a, T&gt;","impl <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.Once.html\" title=\"struct sgx_tstd::sync::Once\">Once</a>","impl <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxThreadRwLock.html\" title=\"struct sgx_tstd::sync::SgxThreadRwLock\">SgxThreadRwLock</a>","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"sgx_tstd/marker/trait.Sized.html\" title=\"trait sgx_tstd::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> + <a class=\"trait\" href=\"sgx_tstd/marker/trait.Sync.html\" title=\"trait sgx_tstd::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxRwLock.html\" title=\"struct sgx_tstd::sync::SgxRwLock\">SgxRwLock</a>&lt;T&gt;","impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"sgx_tstd/marker/trait.Sized.html\" title=\"trait sgx_tstd::marker::Sized\">Sized</a>&gt; !<a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxRwLockReadGuard.html\" title=\"struct sgx_tstd::sync::SgxRwLockReadGuard\">SgxRwLockReadGuard</a>&lt;'a, T&gt;","impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"sgx_tstd/marker/trait.Sized.html\" title=\"trait sgx_tstd::marker::Sized\">Sized</a>&gt; !<a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxRwLockWriteGuard.html\" title=\"struct sgx_tstd::sync::SgxRwLockWriteGuard\">SgxRwLockWriteGuard</a>&lt;'a, T&gt;","impl <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxThreadSpinlock.html\" title=\"struct sgx_tstd::sync::SgxThreadSpinlock\">SgxThreadSpinlock</a>","impl <a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxSpinlock.html\" title=\"struct sgx_tstd::sync::SgxSpinlock\">SgxSpinlock</a>","impl&lt;'a&gt; !<a class=\"trait\" href=\"sgx_tstd/marker/trait.Send.html\" title=\"trait sgx_tstd::marker::Send\">Send</a> for <a class=\"struct\" href=\"sgx_tstd/sync/struct.SgxSpinlockGuard.html\" title=\"struct sgx_tstd::sync::SgxSpinlockGuard\">SgxSpinlockGuard</a>&lt;'a&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
