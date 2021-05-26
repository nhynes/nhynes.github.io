(function() {var implementors = {};
implementors["oasis_runtime_sdk"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/crypto/signature/ed25519/struct.PublicKey.html\" title=\"struct oasis_runtime_sdk::crypto::signature::ed25519::PublicKey\">PublicKey</a>","synthetic":false,"types":["oasis_runtime_sdk::crypto::signature::ed25519::PublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;PublicKey&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/crypto/signature/ed25519/struct.PublicKey.html\" title=\"struct oasis_runtime_sdk::crypto::signature::ed25519::PublicKey\">PublicKey</a>","synthetic":false,"types":["oasis_runtime_sdk::crypto::signature::ed25519::PublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ PublicKey&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/crypto/signature/ed25519/struct.PublicKey.html\" title=\"struct oasis_runtime_sdk::crypto::signature::ed25519::PublicKey\">PublicKey</a>","synthetic":false,"types":["oasis_runtime_sdk::crypto::signature::ed25519::PublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/crypto/signature/secp256k1/struct.PublicKey.html\" title=\"struct oasis_runtime_sdk::crypto::signature::secp256k1::PublicKey\">PublicKey</a>","synthetic":false,"types":["oasis_runtime_sdk::crypto::signature::secp256k1::PublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/crypto/signature/struct.Signature.html\" title=\"struct oasis_runtime_sdk::crypto::signature::Signature\">Signature</a>","synthetic":false,"types":["oasis_runtime_sdk::crypto::signature::Signature"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/dispatcher/enum.Error.html\" title=\"enum oasis_runtime_sdk::dispatcher::Error\">Error</a>&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/error/struct.RuntimeError.html\" title=\"struct oasis_runtime_sdk::error::RuntimeError\">RuntimeError</a>","synthetic":false,"types":["oasis_core_runtime::types::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/modules/core/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::core::Error\">Error</a>&gt; for <a class=\"enum\" href=\"oasis_runtime_sdk/modules/accounts/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::accounts::Error\">Error</a>","synthetic":false,"types":["oasis_runtime_sdk::modules::accounts::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/modules/accounts/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::accounts::Error\">Error</a>&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/error/struct.RuntimeError.html\" title=\"struct oasis_runtime_sdk::error::RuntimeError\">RuntimeError</a>","synthetic":false,"types":["oasis_core_runtime::types::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;StateError&gt; for <a class=\"enum\" href=\"oasis_runtime_sdk/modules/consensus/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::consensus::Error\">Error</a>","synthetic":false,"types":["oasis_runtime_sdk::modules::consensus::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/modules/core/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::core::Error\">Error</a>&gt; for <a class=\"enum\" href=\"oasis_runtime_sdk/modules/consensus/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::consensus::Error\">Error</a>","synthetic":false,"types":["oasis_runtime_sdk::modules::consensus::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/modules/consensus/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::consensus::Error\">Error</a>&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/error/struct.RuntimeError.html\" title=\"struct oasis_runtime_sdk::error::RuntimeError\">RuntimeError</a>","synthetic":false,"types":["oasis_core_runtime::types::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/modules/consensus/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::consensus::Error\">Error</a>&gt; for <a class=\"enum\" href=\"oasis_runtime_sdk/modules/consensus_accounts/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::consensus_accounts::Error\">Error</a>","synthetic":false,"types":["oasis_runtime_sdk::modules::consensus_accounts::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/modules/core/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::core::Error\">Error</a>&gt; for <a class=\"enum\" href=\"oasis_runtime_sdk/modules/consensus_accounts/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::consensus_accounts::Error\">Error</a>","synthetic":false,"types":["oasis_runtime_sdk::modules::consensus_accounts::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/modules/consensus_accounts/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::consensus_accounts::Error\">Error</a>&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/error/struct.RuntimeError.html\" title=\"struct oasis_runtime_sdk::error::RuntimeError\">RuntimeError</a>","synthetic":false,"types":["oasis_core_runtime::types::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/types/transaction/enum.Error.html\" title=\"enum oasis_runtime_sdk::types::transaction::Error\">Error</a>&gt; for <a class=\"enum\" href=\"oasis_runtime_sdk/modules/core/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::core::Error\">Error</a>","synthetic":false,"types":["oasis_runtime_sdk::modules::core::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/modules/core/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::core::Error\">Error</a>&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/error/struct.RuntimeError.html\" title=\"struct oasis_runtime_sdk::error::RuntimeError\">RuntimeError</a>","synthetic":false,"types":["oasis_core_runtime::types::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/modules/rewards/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::rewards::Error\">Error</a>&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/error/struct.RuntimeError.html\" title=\"struct oasis_runtime_sdk::error::RuntimeError\">RuntimeError</a>","synthetic":false,"types":["oasis_core_runtime::types::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/modules/rewards/types/enum.RewardScheduleError.html\" title=\"enum oasis_runtime_sdk::modules::rewards::types::RewardScheduleError\">RewardScheduleError</a>&gt; for <a class=\"enum\" href=\"oasis_runtime_sdk/modules/rewards/enum.ParameterValidationError.html\" title=\"enum oasis_runtime_sdk::modules::rewards::ParameterValidationError\">ParameterValidationError</a>","synthetic":false,"types":["oasis_runtime_sdk::modules::rewards::ParameterValidationError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"oasis_runtime_sdk/types/address/struct.Address.html\" title=\"struct oasis_runtime_sdk::types::address::Address\">Address</a>","synthetic":false,"types":["oasis_runtime_sdk::types::address::Address"]}];
implementors["test_runtime_simple_keyvalue"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"oasis_runtime_sdk/modules/core/enum.Error.html\" title=\"enum oasis_runtime_sdk::modules::core::Error\">Error</a>&gt; for <a class=\"enum\" href=\"test_runtime_simple_keyvalue/keyvalue/enum.Error.html\" title=\"enum test_runtime_simple_keyvalue::keyvalue::Error\">Error</a>","synthetic":false,"types":["test_runtime_simple_keyvalue::keyvalue::Error"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()